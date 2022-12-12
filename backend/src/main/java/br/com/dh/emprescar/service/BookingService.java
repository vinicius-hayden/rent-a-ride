package br.com.dh.emprescar.service;

import br.com.dh.emprescar.dto.BookingDto;
import br.com.dh.emprescar.model.Booking;
import br.com.dh.emprescar.model.Customer;
import br.com.dh.emprescar.model.Product;
import br.com.dh.emprescar.repository.BookingRepository;
import br.com.dh.emprescar.repository.CustomerRepository;
import br.com.dh.emprescar.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Transactional(readOnly = true)
    public List<BookingDto> searchAll() {
        List<Booking> list = bookingRepository.findAll();
        return list.stream().map(x -> new BookingDto(x)).collect(Collectors.toList());
    }


    @Transactional(readOnly = true)
    public List<BookingDto> searchAllByProductId(Integer productId) {
        List<Booking> list = bookingRepository.findAllByProductId(productId);
        return list.stream().map(x -> new BookingDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<BookingDto> searchAllByCustomerId(Integer customerId) {
        List<Booking> list = bookingRepository.findAllByCustomerId(customerId);
        return list.stream().map(x -> new BookingDto(x)).collect(Collectors.toList());
    }

    @Transactional()
    public BookingDto insert(BookingDto dto) {
        Booking entity = copyDtoToEntity(dto, new Booking());
        Optional<Product> product = productRepository.findById(dto.getProduct().getId());
        Optional<Customer> customer = customerRepository.findById(dto.getCustomer().getId());

        if (product.isPresent()) {
            entity.setProduct(product.get());
        }
        if (customer.isPresent()) {
            entity.setCustomer(customer.get());
        }
        entity = bookingRepository.save(entity);
        return new BookingDto(entity);
    }

    private Booking copyDtoToEntity(BookingDto dto, Booking entity) {
        entity.setPickupDate(dto.getPickupDate());
        entity.setDropoffDate(dto.getDropoffDate());
        return entity;
    }


}
