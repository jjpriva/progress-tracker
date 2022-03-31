import { useSelector } from "react-redux";
import css from "../components/Entries/Entries.module.css";
import EntriesRowItem from "../components/Entries/EntriesRowItem";
import { Routes, Route, Link, useParams } from "react-router-dom";
import AddEntryForm from "../components/AddNewEntry/AddEntryForm";

const Entries = () => {
  const entries = useSelector((state) => state.entries.entries);
  const params = useParams();
  const formOpen = Object.values(params)[0];

  // map table rows
  const entryRows = entries.map((e, index) => {
    return (
      <EntriesRowItem
        id={`${e.category}_${e.name}`}
        key={`${e.category}_${e.name}`}
        index={index}
        name={e.name}
        mass={e.mass}
        reps={e.reps}
        sets={e.sets}
      />
    );
  });

  /*   useEffect(() => {
    if (entries.length === 0) navigate("/entries/addnew", { replace: true });
  }, [entries, navigate]); */

  return (
    <>
      <Routes>
        <Route path="addnew" element={<AddEntryForm />} />
      </Routes>
      <div className={css.entriesContainer}>
        <div className={css.entriesTable}>
          <div className={css.templateHeading}>
            <h3>Weight Lifting</h3>
          </div>

          <div className={css.row}>
            <div className={css.col}>Name</div>
            <div className={css.col}>Mass</div>
            <div className={css.col}>Reps</div>
            <div className={css.col}>Sets</div>
            <div className={css.col}></div>
          </div>
          {entryRows}
        </div>
        {!formOpen && (
          <Link to="addnew">
            <div className={`${css.addItem} iconTextLink`}>
              <span className="material-icons-outlined">add</span>{" "}
              <span>Add New</span>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Entries;