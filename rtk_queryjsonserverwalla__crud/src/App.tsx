import "./App.css";
import { Contact } from "./models/contact.model";

import {
  useAddContactMutation,
  useContactQuery,
  useContactsQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} from "./services/Contactapi";
function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();
  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query Tutorial</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2 style={{ color: "red" }}>Something Went Wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map((contact:Contact) => (
            <div className="data" key={contact.id}>
              <span>{contact.name}</span>
              <span>
                <ContactDetial id={contact.id} />
              </span>
            </div>
          ))}
        </div>
      )}
      <div>
        <AddContact />
      </div>
    </div>
  );
}
export const ContactDetial = ({ id }: { id: number }) => {
  const { data } = useContactQuery(id);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};
export interface Conta {
  id?: number;
  name: string;
  email: string;
}
export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  const contact: Conta = {
    name: "Mithilesh Singh",
    email: "renu@gmail.com",
  };
  const addHandler = async () => {
    await addContact(contact);
  };
  const updateHandler = async () => {
    await updateContact({ ...contact, name: "Sunny Leone", id: 4 });
  };
  const deleteHandler = async () => {
    await deleteContact(5);
  };
  return (
    <>
      <button onClick={addHandler}>Add Contact</button>
      <button onClick={updateHandler}>Update Contact</button>
      <button onClick={deleteHandler}>Delete Contact</button>
    </>
  );
};
export default App;
