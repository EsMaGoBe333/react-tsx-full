import React from 'react';

const SelectLang = ({langs, onChangeLang, selectedLang}) => {
  const optionsLang = langs.map((l, pos) => <option key={pos} value={l}>{l.toUpperCase()}</option>)

    return (
      <select onChange={(e) => onChangeLang(e.target.value)} value={selectedLang}>
        {optionsLang}
      </select>
    )
}

export default SelectLang