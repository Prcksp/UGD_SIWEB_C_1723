'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
 
const createReservation = FormSchema.omit({ id: true, date: true });
const UpdateReservation = FormSchema.omit({ id: true, date: true });
 
export async function updateReservation(id: string, formData: FormData) {
    const { customerId, amount, status } = UpdateReservation.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
    const amountInCents = amount * 100;

    try {
      await sql`
          UPDATE invoices
          SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
          WHERE id = ${id}
        `;
    } catch (error) {
      return { message: 'Database Error: Failed to Update Reservation.' };
    }

    revalidatePath('/dashboard/reservations');
    redirect('/dashboard/reservations');
  }
 
export async function createReservations(formData: FormData) {
    const { customerId, amount, status } = createReservation.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  try{
  await sql`
    INSERT INTO reservations (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
} catch (error) {
  return {
    message: 'Database Error: Failed to Create Reservation.',
  };
}
 
  revalidatePath('/dashboard/reservations');
  redirect('/dashboard/reservations');
}
 
export async function deleteReservation(id: string) {
  throw new Error('Failed to Delete Reservation');
  
  try {
    await sql`DELETE FROM reservations WHERE id = ${id}`;
    revalidatePath('/dashboard/reservations');
    return { message: 'Deleted Reservation.'};
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}