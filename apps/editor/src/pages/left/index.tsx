import {Card, message, Modal, Radio} from 'antd';
import MenuComponent from './menu-page';
import Components from './menu-component';
import {createStyles} from 'antd-style';
import {Fragment, useEffect, useState} from "react";
import {post} from "@brushes/request";

const useStyle = createStyles(({token, css}) => {
    return {
        cardMenu: css`
            width: 160px;

            .ant-card-body {
                padding: 0;
            }
        `
    }
});

const ModelComponent = ({setIsModalOpen, isModalOpen}) => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    useEffect(() => {
        query()
    }, []);

    const query = async () => {
        const {list} = await post('/web/pfs/pfsmmodel/queryPfsMmodelPage.json');
        setList(list);
    }
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const submit = async () => {
        try {
            const {msg} = await post('/web/pfs/pfsmmodel/publishMmodel.json', {
                mmodelId: value,
            })
            message.success(msg);
            query();
            setIsModalOpen(false)
        } catch (err) {

        }

    }

    return (
        <Modal
            destroyOnHidden
            title="模版管理"
            closable={{'aria-label': 'Custom Close Button'}}
            open={isModalOpen}
            onOk={submit}
            onCancel={() => setIsModalOpen(false)}
        >
            <Radio.Group
                style={{width: 420}}
                onChange={onChange}
            >
                {
                    list.map(item => (
                        <Fragment key={item.mmodelId}>
                            <Radio value={item.mmodelId}>
                                <div style={{display: 'flex', width: 420, justifyContent: 'space-between'}}>
                                    {item.mmodelName}
                                    <div>{item.dataState === 1 ? '已发布' : '未发布'}</div>
                                </div>
                            </Radio>
                        </Fragment>
                    ))
                }
            </Radio.Group>
        </Modal>
    )
}
const Left = () => {
    const {styles} = useStyle();
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Card size="small" className={styles.cardMenu} title="栏目管理"
                  extra={<a onClick={() => setIsModalOpen(true)} href="#">模版管理</a>}>
                <MenuComponent/>
            </Card>
            { isModalOpen && <ModelComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> }
            <Card size="small" className={styles.cardMenu} title="组件管理" style={{marginTop: 15}}>
                <Components/>
            </Card>
        </>
    )
}

export default Left
