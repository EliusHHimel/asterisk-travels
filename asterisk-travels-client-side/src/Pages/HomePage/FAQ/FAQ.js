import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="container">

                <center>
                    <h1 className="custom-heading-font-style my-5">Frequently Asked <span className="text-danger">Questions</span>
                    </h1>
                    <hr />
                </center>


                <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
                    <div className="col">
                        <img className="img-fluid" src="https://honda-cbr-elius.netlify.app/images/faq.png" alt="" />
                    </div>
                    <div className="col">
                        <div className="accordion" id="accordionOne">
                            <div className="accordion-item mt-3 border">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        Is your packages includes foods and hotel cost?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        Two waters green you greater third multiply air third brought likeness appear gathered light seed give them. Tree his whose. Be lights deep after good days said forth from they're give. Which appear land seas sea spirit open thing, let you're him above isn't in first given had have first.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-2">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        What are the most popular packages do you offer?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        Two waters green you greater third multiply air third brought likeness appear gathered light seed give them. Tree his whose. Be lights deep after good days said forth from they're give. Which appear land seas sea spirit open thing, let you're him above isn't in first given had have first.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I book a Package?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        Two waters green you greater third multiply air third brought likeness appear gathered light seed give them. Tree his whose. Be lights deep after good days said forth from they're give. Which appear land seas sea spirit open thing, let you're him above isn't in first given had have first.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        In which countries are you prividing your services?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        Two waters green you greater third multiply air third brought likeness appear gathered light seed give them. Tree his whose. Be lights deep after good days said forth from they're give. Which appear land seas sea spirit open thing, let you're him above isn't in first given had have first.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;