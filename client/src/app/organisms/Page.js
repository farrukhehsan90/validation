import React, { useState, useEffect } from "react";
import Element from "../molecules/Element";
import { Schema } from "../../Config/schema";
import { getData, postData } from "../../Config/Services";
import Records from "../atoms/Records";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export default function Page() {
  let { fields } = Schema ?? [];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [data, setData] = useState({});
  const [items, setItems] = useState([]);
  const [unitAndQ, setUnitAndQ] = useState({ quantity: "", unit: "" });
  const handleSubmit = async () => {
    let body = {
      ...data,
      quantity: unitAndQ.quantity,
      unit: unitAndQ.unit,
      id: uuidv4(),
    };
    const res = await postData(body);
    if (!res.error) {
      alert(res.message);
    }
    handelRefresh();
  };

  useEffect(() => {
    handelRefresh();
  }, []);

  const handleChange = (type, index, item) => {
    try {
      if (fields[index][item]) {
        const fieldOptions = fields[index][item];
        fields[index].optionsToShow = fieldOptions;
        setSelectedOptions(fieldOptions);
      }
      setData({ ...data, [type]: item });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handelRefresh = async () => {
    const res = await getData();
    console.log(res);
    if (res) {
      setItems(res);
    }
  };

  return (
    <div>
      <form>
        {fields.map((f, index) => {
          return (
            <Element
              key={f.id}
              type={f.type}
              name={f.name}
              item={f}
              options={f.options}
              setUnitAndQ={setUnitAndQ}
              onChangeSelect={(type, value) => {
                handleChange(type, index, value);
              }}
              selectedOptions={selectedOptions}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </form>
      <div className="divider" />
      <div className="showrec_container">
        <h1 className="title">All Records</h1>
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={() => {
            handelRefresh();
          }}
        >
          Refresh
        </button>
      </div>
      {items.length > 0 ? (
        items.map((item, i) => {
          return (
            <Records
              Food={item.Food}
              key={i}
              FoodType={item.FoodType}
              quantity={item.quantity}
              Utensils={item.Utensils}
              unit={item.unit}
              Toys={item.Toys}
            />
          );
        })
      ) : (
        <h1>No Record Found</h1>
      )}
    </div>
  );
}
