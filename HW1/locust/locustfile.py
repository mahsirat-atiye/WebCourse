from locust import HttpUser, between, task


class GolangWebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def index(self):
        self.client.post("/go/sha256", {
            "message": "hi honey hjow"
        })
        self.client.get("/go/sha256?id=5ece8e625e57a99f0c57f2abe5f49ec6f35b3f4cbbab27ac4ab62a2d60705bee")


class NodejsWebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def index(self):
        self.client.post("/node/sha256", {
            "message": "hi honey hjow"
        })
        self.client.get("/node/sha256?id=5ece8e625e57a99f0c57f2abe5f49ec6f35b3f4cbbab27ac4ab62a2d60705bee")
