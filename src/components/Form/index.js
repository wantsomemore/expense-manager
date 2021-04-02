import React, { useRef, useState, useEffect } from "react";
import "../Form/style.scss";
import {
  FormControl,
  InputLabel,
  Input,
  Typography,
  makeStyles,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    color: "#323232",
    fontSize: "28px",
    lineHeight: "32px",
    fontFamily: "Robotto",
  },
  label: {
    paddingLeft: "10px",
    fontSize: "18px",
    lineHeight: "22px",
  },
  dateLabel: {
    paddingLeft: "10px",
    top: "-24px",
    left: 0,
    position: "absolute",
    transform: "translate(0, 24px)",
  },
  input: {
    paddingLeft: "10px",
  },
  currencyInput: {
    paddingLeft: "10px",
    textTransform: "uppercase",
  },
  addBtn: {
    background: "#3f51b5",
    color: "#ffffff",
    fontSize: "20px",
    lineHeight: "26px",
    width: "100px",
    textTransform: "none",
    "&:hover": {
      background: "#3f51b5",
      opacity: 0.9,
    },
  },
});

const CURRENCY_API = "https://api.exchangerate.host/latest";

const Form = ({
  expenseList,
  setExpenseList,
  totalExpense,
  setTotalExpense
}) => {
  const classes = useStyles();

  const [currency, setCurrency] = useState("");
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [currencyRate, setCurrencyRate] = useState(null)
  const product = useRef('');
  const price = useRef(null);
  const date = useRef('');

  useEffect(() => {
    fetch(CURRENCY_API)
      .then(res => res.json())
      .then(data =>  {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      });
  }, []);
    
  useEffect(() => {
      if (currency !== null) {
     fetch(`https://api.exchangerate.host/convert?from=${currency}&to=PLN`)
        .then(res => res.json())
        .then(data => {
         setCurrencyRate(data.info.rate)
        })
  }}, [currency, setCurrencyRate])

  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  };
  
  const handleAdd = (e) => {
    e.preventDefault();

    let newDate = date.current.value.split("-").join("-");
    let id = Math.trunc(Math.random() * 1000);
    
    setTotalExpense([
      ...totalExpense,
      {
        price: price.current.value * currencyRate,
        currency: currency
      }
    ])
   
    setExpenseList([
      ...expenseList,
      {
        id: id,
        date: newDate,
        product: product.current.value,
        price: price.current.value,
        currency: currency,
      },
    ]);

    product.current.value = "";
    date.current.value = "";
    price.current.value = null;
    setCurrency("");

  };

  return (
    <>
      <Typography className={classes.title}>Add expense</Typography>
      <form className="form" onSubmit={handleAdd}>
        <FormControl>
          <InputLabel className={classes.label}>Product</InputLabel>
          <Input
            className={classes.input}
            inputRef={product}
            type="text"
            required={true}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Price</InputLabel>
          <Input
            className={classes.input}
            inputRef={price}
            required={true}
            type="number"
          />
        </FormControl>
        <FormControl>
          <InputLabel id="currency-label" className={classes.label}>
            Currency
          </InputLabel>
          <Select
            labelId="currency-label"
            id="currency"
            onChange={handleCurrency}
            value={currency}
            required={true}
          >
            {currencyOptions.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel className={classes.dateLabel}>Date</InputLabel>
          <Input
            className={classes.input}
            inputRef={date}
            required={true}
            type="date"
          />
        </FormControl>
        <Button className={classes.addBtn}  type="submit">
          Add
        </Button>
      </form>
    </>
  );
};

export default Form;
