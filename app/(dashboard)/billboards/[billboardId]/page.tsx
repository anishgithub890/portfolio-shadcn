import prisma from '@/lib/prismadb';

import { BillboardForm } from './components/billboard-form';

const BillboardPage = async ({
  params,
}: {
  params: { billboardId?: string; storeId?: string; userId?: string };
}) => {
  const billboard = await prisma.billboard.findFirst({
    where: {
      id: params.billboardId,
      // id: params.storeId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
