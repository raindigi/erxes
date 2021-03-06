const commonParamsDef = `
  $name: String!,
  $type: String!
`;

const commonParams = `
  name: $name,
  type: $type
`;

const boardAdd = `
  mutation boardsAdd(${commonParamsDef}) {
    boardsAdd(${commonParams}) {
      _id
    }
  }
`;

const boardEdit = `
  mutation boardsEdit($_id: String!, ${commonParamsDef}) {
    boardsEdit(_id: $_id, ${commonParams}) {
      _id
    }
  }
`;

const boardRemove = `
  mutation boardsRemove($_id: String!) {
    boardsRemove(_id: $_id)
  }
`;

const commonPipelineParamsDef = `
  $name: String!,
  $boardId: String!,
  $stages: JSON,
  $type: String!,
  $visibility: String!,
  $memberIds: [String],
  $bgColor: String,
`;

const commonPipelineParams = `
  name: $name,
  boardId: $boardId,
  stages: $stages,
  type: $type,
  visibility: $visibility,
  memberIds: $memberIds,
  bgColor: $bgColor
`;

const pipelineAdd = `
  mutation pipelinesAdd(${commonPipelineParamsDef}) {
    pipelinesAdd(${commonPipelineParams}) {
      _id
    }
  }
`;

const pipelineEdit = `
  mutation pipelinesEdit($_id: String!, ${commonPipelineParamsDef}) {
    pipelinesEdit(_id: $_id, ${commonPipelineParams}) {
      _id
    }
  }
`;

const pipelineRemove = `
  mutation pipelinesRemove($_id: String!) {
    pipelinesRemove(_id: $_id)
  }
`;

const pipelinesUpdateOrder = `
  mutation pipelinesUpdateOrder($orders: [OrderItem]) {
    pipelinesUpdateOrder(orders: $orders) {
      _id
    }
  }
`;

export default {
  boardAdd,
  boardEdit,
  boardRemove,
  pipelineAdd,
  pipelineEdit,
  pipelineRemove,
  pipelinesUpdateOrder
};
