import { useEffect, useState } from "preact/hooks";

type ChecklistProps = {
  path?: string;
};
const checklistData = [
  {
    section: "Gyventi tik šiandienai",
    items: [
      "Nepersistengti spręsti visų gyvenimo problemų iš karto",
      "Susitelkti tik į šias 12 valandų",
    ],
  },
  {
    section: "Pasirinkti būti laimingu",
    items: ["Priminti sau, kad laimė yra pasirinkimas"],
  },
  {
    section: "Prisitaikyti prie realybės",
    items: [
      "Priimti situacijas tokias, kokios jos yra",
      "Nesistengti visko pritaikyti pagal saves",
    ],
  },
  {
    section: "Stiprinti protą",
    items: [
      "Išmokti ką nors naujo",
      "Perskaityti ką nors sudėtingesnio ir reikalaujančio susikaupimo",
    ],
  },
  {
    section: "Ugdytis dvasiškai",
    items: [
      "Padaryti gerą darbą kitam žmogui, likti nepastebėtam",
      "Atlikti 2 dalykus, kurių nenori daryti",
      "Neparodyti, jei jausmai bus užgauti",
    ],
  },
  {
    section: "Būti maloniu",
    items: [
      "Pasirūpinti išvaizda, apsirengti tvarkingai",
      "Kalbėti ramiai ir mandagiai",
      "Nekritikuoti, nesiskųsti, nekontroliuoti kitų",
    ],
  },
  {
    section: "Turėti dienos planą",
    items: [
      "Sudaryti dienos planą (nors ir ne tobulai laikytis jo)",
      "Vengti skubėjimo ir neryžtingumo",
    ],
  },
  {
    section: "Skirti laiko ramybei",
    items: [
      "Rasti bent 30 minučių tylai ir apmąstymams",
      "Mėgautis grožiu aplink",
      "Tikėti, kad pasaulis atsako tuo pačiu, ką jam duodi",
    ],
  },
];
export default function Checklist(_props: ChecklistProps) {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(checklistData.flatMap((group) => group.items).length).fill(false)
  );

  // Reset checkboxes if it's a new day
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const lastReset = localStorage.getItem("lastCheckboxReset");

    if (lastReset !== today) {
      const newChecked = new Array(checked.length).fill(false);
      setChecked(newChecked);
      localStorage.setItem("lastCheckboxReset", today);
    } else {
      const saved = localStorage.getItem("checkboxState");
      if (saved) setChecked(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checkboxState", JSON.stringify(checked));
  }, [checked]);

  const handleCheck = (index: number) => {
    const newState = [...checked];
    newState[index] = !newState[index];
    setChecked(newState);
  };

  let globalIndex = 0;

  return (
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-8 col-lg-6">
          <h3 class="mb-4">Veiksmų sąrašas</h3>
          <ul class="list-group">
            {checklistData.map((group, groupIndex) => (
              <div key={groupIndex}>
                <div class="fw-bold mb-2 mt-3">{group.section}</div>
                {group.items.map((item, itemIndex) => {
                  const currentIndex = globalIndex++;
                  return (
                    <li class="list-group-item" key={itemIndex}>
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        checked={checked[currentIndex]}
                        onChange={() => handleCheck(currentIndex)}
                      />
                      {item}
                    </li>
                  );
                })}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
