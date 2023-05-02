import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCountryByActivity, getActivities } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function FilterByActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allActivities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handlerFilterByActivity = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value === "/createActivity") {
      history.push("/createActivity");
    } else {
    dispatch(getCountryByActivity(value));
    }
  };

  const optionSelect = (allActivities) => {
    const activities = allActivities.map((el) => {
      return (
        <option value={el.name} key={el.id}>
          {el.name}
        </option>
      );
    });

    const noActivities = (
      <option value={"/createActivity"} key="CreateActivity">
        Create a new activity
      </option>
    );
    const response = allActivities.length ? activities : noActivities;
    return response;
  };

  return (
    <div>
      <label htmlFor="activity-country">Countries by activities</label>
      <select
        id="activity-country"
        onChange={(e) => handlerFilterByActivity(e)}
      >
        <option value="" disabled selected>
          Select or create an activity
        </option>
        {optionSelect(allActivities)}
      </select>
    </div>
  );
}
