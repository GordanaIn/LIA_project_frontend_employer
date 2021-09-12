import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
//this is a test componenet to test react router


type Person = {
    name: string,
    age: number,
    personalNr: number,

}

const CreatePerson: React.FC<Person> = ({name, age, personalNr}) => {

    const [person, setPerson] = useState<Person>({
        name: "",
        age: 0,
        personalNr: 0,

    })

    const buttonHandler = () => {
        setPerson({
            name: name,
            age: age,
            personalNr: personalNr,

        })
    }


    return (
        <div>
            <li>{person.name}</li>
            <li>{person.age}</li>
            <li>{person.personalNr}</li>
            <Button onClick={buttonHandler} variant="contained" color="secondary">
              Add person
                
            </Button>

        </div>
    )
}
export default CreatePerson