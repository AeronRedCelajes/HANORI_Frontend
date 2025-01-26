import React, { useState } from 'react';
import { Navbar, Container, Row, Col, Dropdown, DropdownButton, Tab, Tabs, Button } from 'react-bootstrap';
import '../style/playground.css'

export const PlaygroundComponent = () => {

    //dropdown
    const [selectedLanguage, setSelectedLanguage] = useState({ name: 'Java', imgSrc: '/src/assets/java2.png' });
    const handleSelect = (language) => {
        const languages = {
        'C#': '/src/assets/c.png',
        'Java': '/src/assets/java2.png',
        'Python': '/src/assets/py.png',
        };
        setSelectedLanguage({ name: language, imgSrc: languages[language] });
    };

    //tabs
    const [key, setKey] = useState('main');

  return (
    <>
        <nav className='playground-navbar'>
            <Row>
                <Col className='home'>
                    <p><a href="#"><span className="bi bi-arrow-left-circle"></span></a>Home</p>
                </Col>
                
                <Col className='signal'>
                    <p>20 ms <a href="#"><span className="bi bi-moon"></span></a></p>
                </Col>
            </Row>
        </nav>

        <div className='playground'>
            <div className='playground-container'>
                <div className='playground-header'>
                    <Row>
                        <Col sm={10} className='left-corner'>
                            <Tabs defaultActiveKey={key} id="tab" onSelect={(k) => setKey(k)} fill>
                                <Tab eventKey="main" title="main.py"></Tab>
                                <Tab eventKey="code.java" title="code.java"></Tab>
                            </Tabs>
                            <a href='#'><span className='bi bi-plus-square-fill'></span></a>
                        </Col>

                        <Col sm={1} className='right-corner'>
                            <a href='#'><span className='bi bi-gear'></span></a>
                            <DropdownButton className='playground-dropdown' id='language-dropdown' size="sm" title={<><img src={selectedLanguage.imgSrc} style={{ width: '20px', marginRight: '8px' }}/>{selectedLanguage.name} </>} onSelect={handleSelect}>
                                <Dropdown.Item eventKey="C#"><img src='/src/assets/c.png'/>C#</Dropdown.Item>
                                <Dropdown.Item eventKey="Java"><img src='/src/assets/java2.png'/>Java</Dropdown.Item>
                                <Dropdown.Item eventKey="Python"><img src='/src/assets/py.png'/>Python</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                    
                    <div className='header-border'></div>
                </div>

                <div className='playground-bottom'>
                    <div>
                        <Row>
                            <Col sm={9} className='left-corner'>
                                <a href='#'><span className='bi bi-chat-dots-fill'></span></a>
                            </Col>

                            <Col sm={2} className='right-corner'>
                                <Button>Run Code</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
