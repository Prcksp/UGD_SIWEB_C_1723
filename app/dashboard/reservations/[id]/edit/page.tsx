import Form from '@/app/ui/reservations/edit-form';
import Breadcrumbs from '@/app/ui/reservations/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [reservations, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
      ]);

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
          <Form reservation={reservations} customers={customers} />
        </main>
      );
    }