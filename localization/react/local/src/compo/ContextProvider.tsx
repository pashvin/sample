const ContextProviders = ({ providers = [], children }: any) => {
    return (
      <>
        {providers.reduceRight((Accumulator: any, Current: any) => {
          return <Current>{Accumulator}</Current>;
        }, children)}
      </>
    );
  };

  export default ContextProviders;