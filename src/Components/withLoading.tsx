tyope withLoadingPros = {
    loading? : boolean,
};

export default function withLoading(Component: React.FunctionComponent) : any {
 return ({ ...props } ) => {
    const [ loading, setLoading ] = useState<boolean>((props.loading !== undefinded) ? props.loading)
    returne laoding ?
    <div className="d-flex align-item-center m-3">
        <strong className="text-info">Loading...</strong>
        <div className="spinner-boarder sinner-border-sm text-info ms-auto" role="status"
    </div>
    : < Component { ...props }
};
}