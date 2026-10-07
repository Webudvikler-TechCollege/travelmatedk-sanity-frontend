import styled from 'styled-components';

export const SearchFormStyled = styled.form`
    display: flex;
    align-items: stretch;
    width: min(100%, 24rem);
    padding: 4px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.control};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.input};

    &:focus-within {
        outline: 2px solid #0867e8;
        outline-offset: 3px;
    }

    input {
        flex: 1;
        width: 0;
        min-height: 44px;
        box-sizing: border-box;
        border: 0;
        box-shadow: none;
        outline: none;
        background: transparent;
    }

    button {
        flex-shrink: 0;
        min-height: 44px;
        padding-inline: 1.25rem;
        white-space: nowrap;
    }
`;
