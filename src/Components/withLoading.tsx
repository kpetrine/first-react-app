type WithLoadingProps = {
    loading?: boolean;
  };

  return loading ? (
    <div className="d-flex align-items-center m-3">
      <strong className="text-info">Loading...</strong>
      <div className="spinner-border spinner-border-sm text-info ms-auto" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <Component {...props} />
  );
  