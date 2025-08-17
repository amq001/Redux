import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

function Admin() {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery();
  // first element of array is used to call mutation other are used to get response etc
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {isLoading && <h3>Loading...</h3>}
        {isSuccess &&
          data &&
          data.map((account) => (
            <>
              <h3>
                {account?.id} : {account?.amount}
              </h3>
              <button onClick={() => deleteAccount({ id: account.id })}>
                Delete Account
              </button>
              <button
                onClick={() => updateAccount({ id: account.id, amount: 777 })}
              >
                Update Account
              </button>
            </>
          ))}
        <hr />
        <button
          onClick={() => addAccount({ amount: 100, id: data.length + 1 })}
        >
          Add Account +
        </button>
      </div>
    </div>
  );
}

export default Admin;
