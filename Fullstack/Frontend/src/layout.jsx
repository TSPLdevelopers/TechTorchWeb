function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <FormAuthGuard />

      <Navbar />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}