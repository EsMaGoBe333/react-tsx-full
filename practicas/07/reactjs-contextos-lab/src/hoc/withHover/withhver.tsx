import { useState } from 'react';

const withHover = (WrappedCmp:any) => {
  return (props: any) => {

const [isMouseOn, setIsMouseOn] = useState(false);

const styles = {
  opacity: isMouseOn ? '0.4' : '1',
  width: 'max-content'
}

        return (
          <div
            style={styles}
            onMouseEnter={() => setIsMouseOn(true)}
            onMouseLeave={() => setIsMouseOn(false)}
          >
            <WrappedCmp {...props} />
          </div>
        )
    }
}

export default withHover;