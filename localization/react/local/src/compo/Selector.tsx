import React, { useContext } from "react";
import { LangContext } from "./LangContext";

const Selector = () => {
  const langContext = useContext(LangContext);
  const onSelectionChange = (e:any) => {
    if(e?.target) {
        langContext.setLang(e.target.value);
    }
  }
  return (
    <div>
      <div>Your current Language is : {langContext.lang}</div>
      <br/>
      <div>
        Select your app language:
        <select name="languageInput" onChange={onSelectionChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
};
export default Selector;
