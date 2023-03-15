import { useState } from "react";

const options: any = [
  "Apple",
  "Banana",
  "Banano",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
];

function NewEmployee() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
    const filtered = options.filter((option: any) =>
      option.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div>
      <h1>hola mundo desde new-employee</h1>
      <h3>
        formulario para crear empleado, debemos consultar que inputs se
        necesitan
      </h3>
      {/*  */}
      <div>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <ul>
          {filteredOptions.map((option: any, index: number) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewEmployee;
