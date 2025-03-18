import GoodsLinkList from './goodsLinkList';

const GoodsLink = ({ handleChoose, charArr }: any) => {
  return (
    <div className="goodsLink">
      <GoodsLinkList handleChoose={handleChoose} charArr={charArr} />
    </div>
  );
};

export default GoodsLink;
