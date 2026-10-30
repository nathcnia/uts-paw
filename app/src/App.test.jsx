import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('halaman beranda memuat judul', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: /Daftar Resep Masakan/i })).toBeInTheDocument()
})

test('halaman koleksi bisa dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/koleksi']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: /Koleksi/i })).toBeInTheDocument()
})

test('halaman tambah bisa dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: /Tambah Resep/i })).toBeInTheDocument()
})

test('halaman statistik bisa dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/statistik']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: /Statistik/i })).toBeInTheDocument()
})