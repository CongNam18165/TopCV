import { Dropdown, FormControl } from "react-bootstrap";
// import DropdownButton from 'react-bootstrap/DropdownButton'
import { useState } from "react"
import React from "react"
import clsx from "clsx"
import styles from "./styles.module.scss"
export default function DropDown({title,option1,option2,option3,option4}) {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            
        </a>
    ));
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <FormControl
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelect = (eventKey) => {
        setSelectedValue(eventKey);
    };
    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"  >
                {selectedValue || title} 
                {/* <span className={clsx(styles.toggle)}><i class="fa-solid fa-caret-down"></i></span> */}
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey={option1}>{option1}</Dropdown.Item>
                <Dropdown.Item eventKey={option2}>{option2}</Dropdown.Item>
                <Dropdown.Item eventKey={option3}>{option3}</Dropdown.Item>
                <Dropdown.Item eventKey={option4}>{option4}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    )
}
