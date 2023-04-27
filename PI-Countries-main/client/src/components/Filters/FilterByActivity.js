import React from "react";
import { useEffect } from "react";
import { getCountryByActivity, getActivities } from "../../actions";
import { useDispatch, useSelector } from "react-redux";



export default function FilterByActivity (){
    const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);


  const handlerFilterByActivity = (e) => {
    dispatch(getCountryByActivity(e.target.value));
   
  };

  return (
    <div>
      <label for="activity-country">Countries by activities</label>
      <select id="activity-country" onChange={e => handlerFilterByActivity(e)}>
      <option>All activities</option>
        {
          allActivities.map((el) => {
            return (
                  <option value={el.name} key={el.id}>{el.name}</option>
            );
          })
        }
      </select>
    </div>
  );
}