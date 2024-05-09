import Pagination from '@/app/ui/customers/pagination';
import { kanit } from '@/app/ui/fonts';
import { fetchFilteredCustomers, fetchCustomers } from '@/app/lib/data';
import { CreateCustomers } from '@/app/ui/customers/buttons';
import CustomersTable from '@/app/ui/customers/table';
import Search from '@/app/ui/search';
import { string } from 'zod';

export default async function Page({

  searchParams,
}: {
  searchParams?: {
    page?: string;
    query?: string;
  };
}) {

  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  const totalPages = await fetchCustomers(query);


  return (
    <div className="w-full">
       <div className="flex w-full items-center justify-between">
      <h1 className={`mb-8 text-xl md:text-2xl`}>Customers</h1>
      </div>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${kanit.className} text-2xl flex-col justify center`}>221711940 <br />Timotius Dana Sutanto</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomers/>
      </div>

      <CustomersTable customers={customers}/>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
}query: stringquery: string