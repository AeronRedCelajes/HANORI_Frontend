import React from 'react'
import '../style/features.css'

export const FeaturesComponent = () => {
  return (
    <>
        <div className='feature'>
            <div className='row g-2'>
                <div className='col-md-6 d-flex justify-content-center'>
                    <div className='feature-desc-1'>
                        <h2>Automated Code Checker</h2>
                        <p>Automatically evaluates submitted code for accuracy and efficiency, providing instant feedback to help students learn from their mistakes and improve.</p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className='feature-1'>
                        <img src='/src/assets/check.png' alt='AI Integration'/>
                    </div>
                </div>
            </div>

            <div className='row g-2'>
                <div className='col-md-6'>
                    <div className='feature-2'>
                        <img src='/src/assets/ai.png' alt='AI Integration'/>
                    </div>
                </div>
                <div className='col-md-5 d-flex justify-content-center'>
                    <div className='feature-desc-2'>
                        <h2>AI Integration</h2>
                        <p>Uses AI to assist instructors in understanding student performance patterns, identifying common errors, and offering targeted recommendations for improvement.</p>
                    </div>
                </div>
            </div>

            <div className='row g-2'>
                <div className='col-md-6 d-flex justify-content-center'>
                    <div className='feature-desc-3'>
                        <h2>Data-Driven Insights</h2>
                        <p>Generates detailed reports on student progress, activity, and success rates, helping educators make informed decisions and provide support aligned with individual needs.</p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className='feature-3'>
                        <img src='/src/assets/data.png' alt='AI Integration'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
