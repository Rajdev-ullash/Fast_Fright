import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
    return (
        <section className='container faq-section mt-5 mb-5'>
            <div className="faq-title">
                <div className="top-line mb-4"></div>
                <h2>FAQ</h2>
            </div>
            <div  class="accordion mt-3" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button name='faq-one' className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    How many times do i have to tell you a few ways?
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p className='text-secondary'>
                        Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.
                    </p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button name='faq-two' class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What is do i have to tell you a few lorem?
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p className='text-secondary'>
                    Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities
                    </p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    I have a technical problem or support issue I need resolved, who do I email?
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p className='text-secondary'>
                    Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.
                    </p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    What other services are you compatible with?
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p className='text-secondary'>
                    Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.
                    </p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Are you hiring?
                </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p className='text-secondary'>
                    Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Faq;