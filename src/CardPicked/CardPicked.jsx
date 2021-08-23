import Card from '../Main/Card/Card';

export default function CardPicked(card) {
  return(
    <div className='modal-dialog modal-dialog-centered'>
      <Card card={card} />
    </div>
  );
}