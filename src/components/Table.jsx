import "./table.css";
const cars = [
  {
    id: 1,
    brand: "Audi",
    models: [
      {
        id: 1,
        name: "A1",
        collection: [
          {
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999,
          },
          {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999,
          },
        ],
      },
      {
        id: 2,
        name: "Q5",
        collection: [
          {
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984,
          },
          {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984,
          },
        ],
      },
      {
        id: 3,
        name: "TT",
        collection: [
          {
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984,
          },
          {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    brand: "BMW",
    models: [
      {
        id: 1,
        name: "8 series",
        collection: [
          {
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998,
          },
          {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998,
          },
        ],
      },
      {
        id: 2,
        name: "X6",
        collection: [
          {
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395,
          },
          {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993,
          },
        ],
      },
    ],
  },
];

const Table = () => {
  return (<>
    <h1 className="title">Car Specs</h1>
    <table>
      <tbody>
        {cars.map((car) => {
          return (
            <>
              <tr key={car.brand + car.id}>
                <td className="row__brand">{car.brand}</td>
              </tr>
              {car.models.map((model) => {
                return (
                    <tr key={model.name + model.id} className="row__model">
                      <td className="cell__model">
                        {model.name}
                      </td>
                        {model.collection.map((item) => {
                        return (
                            <td key={item.version + item.id}
                            className="cell__version">
                                <ul>
                                <li>Version: {item.version}</li>
                                <li>Year: {item.year}</li>
                                <li>Horsepower: {item.horsepower}</li>
                                <li>Engine: {item.engine}</li>
                                </ul>
                            </td>
                        );
                        })}
                    </tr>
                );
              })}
            </>
          );
        })}
      </tbody>
    </table>
  </>
  );
};

export default Table;
