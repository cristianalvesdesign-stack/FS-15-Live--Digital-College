function NewsLetter () {
    return (
        <>
        <div className="alert alert-warning" role="alert">
                <div className="row d-flex align-items-center">
                    <div className="col-5">
                        <p className="fs-3 fw-lighter mb-1">Novidades em primeira mão</p>
                        <p className="fw-bolder">Digite seu email e receba nossas novidades<br /> com promoções e descontos exclusivos para você</p>
            </div>
            <div className="col-6">
                <input type="text" className="form-control form-control-sm" placeholder="Seu e-mail aqui!" aria-label="Last name" />
            </div>

            <div className="col-1">
                <button className="btn btn-sm btn-success">Cadastrar</button>
            </div>
                </div>
            </div>
        
        </>
    )
}

export default NewsLetter