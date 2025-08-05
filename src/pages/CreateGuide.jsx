import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Form, Image, Card, Button} from "react-bootstrap";
import Select from "react-select"

import RuneCardCreator from "../components/RuneCardCreator";
import "../styles/CreateGuide.css"

const basicChamps = [
    {id: "aatrox", name: "Aatrox", icon:"aatrox.png"}, // Not ideal, could use `../${id}.png`
    {id: "ahri", name: "Ahri", icon:"ahri.png"},
    {id: "akali", name: "Akali", icon:"akali.png"}
]

export default function CreateGuide(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = location.state || {}

    const [title, setTitle] = useState("");
    const [selected, setSelected] = useState(null); // champ selection
    const [guideBody, setGuideBody] = useState("");

    const [firstPress, setFirstPress] = useState(true);

    const [runePage, setRunePage] = useState({
        primaryTree: "domination",
        keystone: null,
        primaryRunes: [],
        secondaryTree: "inspiration",
        secondaryRunes: [],
        shards: []
    })

    const date = new Date();
    const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;

    const customOptions = basicChamps.map((champ) => (
        {
            value: champ.id,
            label: champ.name,
            icon: `${champ.icon.toLowerCase()}`
        }
    ));

    const customSingleValue = ({ data }) => {
        return (
            <Container>
                <Image src={data.icon} alt={data.label} style={{width: "24px", height: "24px", marginRight: "8px"}}/>
                {data.label}
            </Container>
        )
    }

    const customOption = (props) => {
        const { data, innerRef, innerProps } = props;
        return (
            <Container ref={innerRef} {...innerProps} style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                cursor: "pointer",
                }}
            >
                <Image src={data.icon} alt={data.label} style={{width: "20px", height: "20px", marginRight: "8px"}}/>
                {data.label}
            </Container>
        )
    }


    const handleSubmit = () => {
        if(firstPress) {
            setFirstPress(false);
            handleSubmit;
        } else {
            const current = JSON.parse(sessionStorage.getItem("created_guides")) || [];
            const currLen = current.length;

        const newGuide = {
            id: currLen + 3,
            date: formattedDate,
            title: title,
            champion: selected.label,
            icon: selected.icon,
            author: user,
            items: ["na", "na", "na", "na", "na", "na"],
            primaryTree: runePage.primaryTree,
            keystone: runePage.keystone,
            primaryRunes: runePage.primaryRunes,
            secondaryTree: runePage.secondaryTree,
            secondaryRunes: runePage.secondaryRunes,
            shards: runePage.shards,
            skillOrder: ["w", "q", "e", "q", "q", "r", "q", "w", "q", "w", "r", "w", "w", "e", "e", "r", "e", "e"],
            body: guideBody
        };
        try {
            current.unshift(newGuide);
            sessionStorage.setItem("created_guides", JSON.stringify(current));
            navigate('/guides');
        } catch (error) {
            window.alert("not sure even what could have happened here");
        }
                
        }
    }



    const cardStyle = {
        backgroundColor: "#212529", 
        color:"#f8f9fa", 
        marginBottom: "12px" 
    }

    return (
        <>
            <Container style={{marginTop: "24px"}}>
                <h1>Create a Guide!</h1>
                <Card style={cardStyle}>
                    <Card.Body>
                        <h2>Enter Title</h2>    
                        <Form>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Control 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title"/>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Body>
                        <h2>Select a Champion</h2>
    
                        <Select 
                        options={customOptions}
                        value={selected}
                        onChange={setSelected}
                        placeholder="Select a champion..."
                        componenets={{ SingleValue: customSingleValue, Option: customOption}}
                        isSearchable
                        styles={{
                            control: (base) => ({
                            ...base,
                            backgroundColor: "white",
                            color: "black",
                            }),
                            singleValue: (base) => ({
                            ...base,
                            color: "black",
                            }),
                            input: (base) => ({
                            ...base,
                            color: "black",
                            }),
                            option: (base, state) => ({
                            ...base,
                            color: "black",
                            backgroundColor: state.isFocused ? "#eee" : "white",
                            }),
                            menu: (base) => ({
                            ...base,
                            backgroundColor: "white",
                            }),
                        }}
                        />
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Body>
                        <RuneCardCreator runePage={runePage} setRunePage={setRunePage}/>
                    </Card.Body>
                </Card>
                <Card style={{...cardStyle, padding: "16px", marginBottom: "10px"}}>
                    <h3>Body Text</h3>
                    <Form.Group controlId="formGuideBody">
                        <Form.Control
                        as="textarea"
                        rows={10}
                        value={guideBody}
                        onChange={(e) => setGuideBody(e.target.value)}
                        placeholder="Write body of guide here..."
                        />
                    </Form.Group>
                </Card>
                <div style={{float: 'right'}}>
                    <Button variant="danger" onClick={() => navigate('/guides')}>Go back</Button>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </Container>
        </>

    )
}
