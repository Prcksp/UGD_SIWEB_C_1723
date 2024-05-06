import Form from '@/app/ui/reservations/edit-form';
import Breadcrumbs from '@/app/ui/reservations/breadcrumbs';
import { fetchResevationsById, fetchCustomers } from '@/app/lib/data';
import { updateReservation } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [reservations, customers] = await Promise.all([
      fetchResevationsById(id),
        fetchCustomers(),
      ]);

      if (!reservations) {
        notFound();
      }

    return (
        <main>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Reservations', href: '/dashboard/reservations' },
              {
                label: 'Edit Reservation',
                href: `/dashboard/reservations/${id}/edit`,
                active: true,
              },
            ]}
          />
          <Form reservations={reservations} customers={customers} />
        </main>
      );
    }