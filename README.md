# apply-tachyons

Apply Tachyons to styled-components

## Usage

```shell
import styled from 'styled-components';
import apply from 'apply-tachyons';

const Wrapper = styled.div`
    article { ${apply('pa3 pa5_ns')} }
    h1 { ${apply('f3 f1_m f_headline_l')} }
    p { ${apply('measure lh_copy')} }
`;

export default Wrapper;
```