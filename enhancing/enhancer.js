module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const result = {};

  if (item.succeed) {
    result.succeed = succeed(...item.succeed);
  }
}

function fail(item) {
  const result = {};

  if (item.fail) {
    result.fail = fail(...item.fail);
  }
}

function repair(item) {
  const result = {};

  if (item.repair) {
    result.repair = repair(...item.repair);
  }
}

function get(item) {
  return { ...item };
}
