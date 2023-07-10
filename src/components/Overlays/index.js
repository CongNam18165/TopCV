import clsx from "clsx"
import { Tooltip, OverlayTrigger  } from "react-bootstrap";
import styles from "./styles.module.scss"
export default function Overlays({title,hover}){
    const renderTooltip = (props) => (
        <Tooltip  id="button-tooltip" {...props}>
          {hover}
        </Tooltip>
      );
      
      return(
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
          popperConfig={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [16, 0],
                },
              },
            ],
          }}
        >
          <p className={clsx(styles.new)}>{title}</p>
        </OverlayTrigger>
      )
}