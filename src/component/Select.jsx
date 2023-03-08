import React from 'react';

function Select() {
  return (
    <div>
      <select name="js" id="frontEnd">
        <option value="react">리액트</option>
        <option value="css">css</option>
        <option value="redux">리덕스</option>
        <option value="ts">TS</option>
      </select>
    </div>
  );
}

export default Select;
