const Error = ({ info }) => {
  return (
    <div className="text-center flex  flex-col gap-5 my-20">
      <h2>Üzgünüz, bir şeyler ters gitti</h2>
      <h2>{info}</h2>
    </div>
  );
};

export default Error;
