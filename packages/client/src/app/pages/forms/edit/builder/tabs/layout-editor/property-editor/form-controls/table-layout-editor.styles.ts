import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px 0;
`;

export const Row = styled.div``;

export const Column = styled.div``;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;

  thead,
  tbody {
    tr {
      td {
        margin: 0 !important;
        padding: 0 !important;
      }
    }
  }
`;

export const TableOptions = styled(Table)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  thead {
    tr {
      td {
        width: auto;
        border-left: 0;
        padding: 6px 9px !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        &.drag-and-drop-cell,
        &.delete-cell {
          text-align: center;
          width: 20px !important;
        }
      }
    }
  }

  tbody {
    tr {
      td {
        width: auto;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        &.drag-and-drop-cell,
        &.delete-cell {
          padding: 6px 9px;
          text-align: center;
          width: 20px !important;
          background-color: #ffffff;
        }

        &:last-child {
          border-right: 0;
        }
      }
    }
  }
`;

export const TableAddOption = styled(Table)`
  border-left: 1px dashed rgba(0, 0, 0, 0.1);
  border-right: 1px dashed rgba(0, 0, 0, 0.1);
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);

  tbody {
    tr {
      td {
        padding: 5px 0 !important;
      }
    }
  }
`;

export const Input = styled.input`
  margin: 0;
  border: 0;
  width: 100%;
  outline: none;
  --focus-ring: 0;
  border-radius: 0;
  background-color: #ffffff;
`;

export const Select = styled.select`
  margin: 0;
  border: 0;
  width: 100%;
  outline: none;
  --focus-ring: 0;
  border-radius: 0;
  background-color: #ffffff;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  &::after {
    font-weight: 800;
  }
`;

export const AddOptionIcon = styled(Icon)`
  margin: 0 5px 0 0;

  &::after {
    content: '\\271B';
  }
`;

export const DragIcon = styled(Icon)`
  &::after {
    content: '\\2723';
  }
`;

export const DeleteIcon = styled(Icon)`
  &::after {
    content: '\\2715';
  }
`;
