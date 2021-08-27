// import axios from "../../helpers/axios";
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux";
import { payByTutor } from "../../../actions/Bill/bill.actions";


export const Paypal = (props)=>{
  const dispatch = useDispatch();

  const {cost , bill} = props;
  const k = Number(cost);
  const value = Math.floor(k/23000);
    const paypal = useRef();
    useEffect(()=>{
      window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Thanh toán phí nhận l",
                amount: {
                  currency_code: "USD",
                  value: value,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          // goi API
          const form = {
            idBill : bill.billId ,
            payer : order.payer.email_address,
            incoming: k,
          }
          dispatch(payByTutor(form))
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
    },[])
    return(
        <>
            <div ref={paypal}></div>
        </>
    )
}