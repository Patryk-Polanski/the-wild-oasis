import { useBooking } from './useBooking';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useCheckout } from '../check-in-out/useCheckout';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useDeleteBooking } from './useDeleteBooking';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import Spinner from '../../ui/Spinner';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading as='h1'>Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === 'checked-in' && (
          <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
            Check out
          </Button>
        )}

        {(status === 'checked-out' || status === 'unconfirmed') && (
          <Modal>
            <Modal.Open opens='delete'>
              <Button variation='danger'>Delete booking</Button>
            </Modal.Open>
            {(status === 'checked-out' || status === 'unconfirmed') && (
              <Modal.Window name='delete'>
                <ConfirmDelete
                  resourceName='booking'
                  disabled={isDeleting}
                  onConfirm={() =>
                    deleteBooking(bookingId, {
                      onSettled: () => navigate(-1), // we can customize success, error, settled function here as well instead of just having a generic one coming from the mutation function
                    })
                  }
                />
              </Modal.Window>
            )}
          </Modal>
        )}

        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
