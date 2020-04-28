import grpc
import concurrent
from concurrent import futures

import ice_cream_pb2
import ice_cream_pb2_grpc

class IceCreamServicer(ice_cream_pb2_grpc.IceCreamServicer):
  def OrderIceCream(self, request, context):
    print('we got something!!')
    response = ice_cream_pb2.IceCreamResponse()
    response.message = f"here is your {request.scoops} scoop {request.flavor} ice cream!"
    return response

def main():
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  ice_cream_pb2_grpc.add_IceCreamServicer_to_server(IceCreamServicer(), server)
  print('Server Started. Listening on port 50051')
  server.add_insecure_port('[::]:50051')
  server.start()
  server.wait_for_termination()

main()
