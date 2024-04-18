import Form from '@/app/ui/reservations/create-form';
import Breadcrumbs from '@/app/ui/reservations/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Reservations', href: '/dashboard/Reservations' },
          {
            label: 'Create Invoice',
            href: '/dashboard/Reservations/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}