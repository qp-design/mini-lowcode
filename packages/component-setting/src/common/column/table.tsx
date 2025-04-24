//@ts-nocheck
import { MenuOutlined } from '@ant-design/icons';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, {Dispatch} from 'react';
import {Table, Popconfirm, Button, FormInstance} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {isFunction} from "lodash-es";
import { NamePath} from "@brushes/form";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const Row = ({ children, ...props }: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 999 } : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if ((child as React.ReactElement).key === 'sort') {
          return React.cloneElement(child as React.ReactElement, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{ touchAction: 'none', cursor: 'move' }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

const App = <T extends object>({onChange, name, column, form, setColumn, ...restProps}: {column: Array<T>; name: NamePath; form: FormInstance; setColumn: Dispatch<T>; onChange: (e:any) => void}) => {
  // const [dataSource, setDataSource] = useState<Array<T>>(column);
  const dataSource = form.getFieldValue(name);
  const { title, id } = restProps;
  // useEffect(() => {
  //   setDataSource(column);
  // }, [column]);
  //
  // useEffect(() => {
  //   console.log(70, dataSource);
  //   setColumn(dataSource);
  //   onChange(dataSource);
  // }, [dataSource]);

  const columns: ColumnsType<T> = [
    {
      key: 'sort',
      title: '排序',
      align: 'center',
      width: 35,
    },
    {
      width: 110,
      title: '字段名称',
      dataIndex: title,
    },
    {
      width: 50,
      title: '操作',
      dataIndex: 'action',
      align: 'center',
      render: (text, record) => {
        return (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record[id])}>
            <Button type='link'>删除</Button>
          </Popconfirm>
        )
      }
    }
  ];
  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item[id] !== key);
    // setDataSource(newData);
    onChange(newData);
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      // setDataSource((previous) => {
      //   const activeIndex = previous.findIndex((i) => i[id] === active.id);
      //   const overIndex = previous.findIndex((i) => i[id] === over?.id);
      //   return arrayMove(previous, activeIndex, overIndex);
      // });
      const activeIndex = dataSource.findIndex((i) => i[id] === active.id);
      const overIndex = dataSource.findIndex((i) => i[id] === over?.id);
      onChange(arrayMove(dataSource, activeIndex, overIndex))
    }
  };

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i[id])}
        strategy={verticalListSortingStrategy}
      >
        <Table
          pagination={false}
          size={'small'}
          components={{
            body: {
              row: Row,
            },
          }}
          scroll={{ y: 200 }}
          rowKey={id}
          columns={columns}
          dataSource={dataSource.map((i) => isFunction(i) ? i() : i)}
        />
      </SortableContext>
    </DndContext>
  );
};

export default App;
