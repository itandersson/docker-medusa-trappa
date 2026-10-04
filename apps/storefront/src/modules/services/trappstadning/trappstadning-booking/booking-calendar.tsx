// booking-calendar.tsx
import { Calendar } from "@medusajs/ui"
import { Table } from "@medusajs/ui"

/** Kalender för bokningsdag. */
export function BookingCalendar() {
  return (
    <div
      className="
        [&_th]:w-10
        [&_td]:w-10
        [&_th]:p-0
        [&_td]:p-0
        [&_div.size-8]:w-full
        [&_div.size-8]:justify-center
      "
    >
      <Calendar />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#Ledig tid</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>08:00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>10:00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>13:00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>15:00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
