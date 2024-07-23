/**
 * author https://github.com/antegral
 * form https://github.com/CorentinTh/it-tools/pull/1211
 */
export function extractId(id: bigint) {
  return Number(id & 4095n);
}

export function extractMachineId(id: bigint) {
  return Number((id >> 12n) & 127n);
}

export function extractTimestamp(id: bigint, epoch: bigint | Date) {
  return new Date(Number((id >> 22n) + getTimestamp(epoch)));
}

function getTimestamp(time: bigint | Date) {
  return typeof time === 'bigint' ? time : BigInt(new Date(time).getTime());
}
