import React from 'react';
import { useState } from 'react';

function Test() {
  const [proposals, setProposals] = useState([
    {
      name: 'Project A',
      email: 'projecta@example.com',
      projectType: 'Web development',
      clientEmail: 'clienta@example.com',
      clientWebsite: 'www.clienta.com',
      averageConsume: '10 hours per week',
      status: 'In progress'
    },
    {
      name: 'Project B',
      email: 'projectb@example.com',
      projectType: 'Mobile app development',
      clientEmail: 'clientb@example.com',
      clientWebsite: 'www.clientb.com',
      averageConsume: '20 hours per week',
      status: 'Pending'
    },
    {
      name: 'Project C',
      email: 'projectc@example.com',
      projectType: 'UI/UX design',
      clientEmail: 'clientc@example.com',
      clientWebsite: 'www.clientc.com',
      averageConsume: '5 hours per week',
      status: 'Completed'
    },
  ]);

  return (
    <div className="flex flex-col mt-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {proposals.map((proposal) => (
                  <tr key={proposal.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{proposal.name}</div>
                          <div className="text-sm text-gray-500">{proposal.projectType}</div>
                          <div className="text-sm text-gray-500">{proposal.clientEmail}</div>
                          <div className="text-sm text-gray-500">{proposal.clientWebsite}</div>
                          <div className="text-sm text-gray-500">{proposal.averageConsume}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${proposal.status === 'In progress' ? 'bg-green-100 text-green-800' : proposal.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                        {proposal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
